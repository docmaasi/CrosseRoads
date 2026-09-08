import { describe, expect, it } from 'vitest';
import { validate } from '../../../api/inquiry.js';
import { PACKAGE_OPTIONS } from './inquiry-form.jsx';

const good = {
  name: 'Jordan Rivera',
  email: 'Jordan@Example.com',
  grade: '11th grade (junior)',
  pkg: 'college-plan',
  message: 'My daughter is a junior and we have no idea where to start.',
  website: '',
  elapsedMs: 45_000,
};

describe('inquiry validate', () => {
  it('accepts a normal submission and normalises the email', () => {
    const result = validate(good);
    expect(result.error).toBeUndefined();
    expect(result.fields.email).toBe('jordan@example.com');
    expect(result.fields.pkg).toBe('college-plan');
  });

  it('silently rejects when the honeypot is filled', () => {
    expect(validate({ ...good, website: 'http://spam.example' })).toEqual({ error: 'Rejected.' });
  });

  it('silently rejects submissions that were filled impossibly fast', () => {
    expect(validate({ ...good, elapsedMs: 800 })).toEqual({ error: 'Rejected.' });
    expect(validate({ ...good, elapsedMs: undefined })).toEqual({ error: 'Rejected.' });
  });

  it('rejects an unknown package slug', () => {
    expect(validate({ ...good, pkg: 'free-money' }).error).toMatch(/package/i);
  });

  it('rejects a malformed email and a too-short message', () => {
    expect(validate({ ...good, email: 'not-an-email' }).error).toMatch(/email/i);
    expect(validate({ ...good, message: 'hi' }).error).toMatch(/more/i);
  });

  it('strips control characters and blocks header injection', () => {
    const r = validate({ ...good, name: 'Jo\u0001rdan' });
    expect(r.fields.name).toBe('Jordan');
    expect(validate({ ...good, email: 'a@b.co\r\nBcc: x@y.z' }).error).toBeDefined();
  });

  it('caps field length', () => {
    const r = validate({ ...good, message: 'x'.repeat(10_000) });
    expect(r.fields.message.length).toBe(3000);
  });
});

describe('the form and the API agree on package ids', () => {
  it('accepts every option the form can actually submit', () => {
    expect(PACKAGE_OPTIONS.length).toBeGreaterThan(3);
    for (const option of PACKAGE_OPTIONS) {
      const result = validate({ ...good, pkg: option.value });
      expect(result.error, `${option.value || '(empty)'} — ${option.label}`).toBeUndefined();
      expect(result.fields.pkg).toBe(option.value);
    }
  });

  it('still accepts the retired power-mom id', () => {
    // A family whose service worker is holding the previous bundle would
    // otherwise be told their inquiry is invalid.
    expect(validate({ ...good, pkg: 'power-mom' }).error).toBeUndefined();
  });

  it('rejects an id that is neither current nor retired', () => {
    expect(validate({ ...good, pkg: 'platinum' }).error).toMatch(/package/i);
  });
});
