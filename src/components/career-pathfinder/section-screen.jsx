import {
  Brain,
  Briefcase,
  Flame,
  GraduationCap,
  Heart,
  Sparkles,
  Sun,
} from 'lucide-react';
import { Button } from '@/ui/button';
import { toast } from 'sonner';
import { SECTIONS } from './data/sections';
import { isQuestionAnswered } from './use-assessment';
import { LikertScale, MultiChoice, SingleChoice } from './question-inputs';

function QuestionBlock({ question, scale, answers, setAnswer }) {
  const value = answers[question.id];
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="mb-3 font-medium text-stone-800">{question.title}</h3>
      {question.kind === 'single' && (
        <SingleChoice
          question={question}
          value={typeof value === 'string' ? value : ''}
          onChange={(v) => setAnswer(question.id, v)}
        />
      )}
      {question.kind === 'multi' && (
        <MultiChoice
          question={question}
          value={Array.isArray(value) ? value : []}
          onChange={(v) => setAnswer(question.id, v)}
        />
      )}
      {question.kind === 'likert' && (
        <LikertScale
          question={question}
          value={typeof value === 'number' ? value : null}
          onChange={(v) => setAnswer(question.id, v)}
          scale={scale}
        />
      )}
    </div>
  );
}

const SECTION_ICONS = {
  education: GraduationCap,
  talents: Sparkles,
  interests: Heart,
  passions: Flame,
  personality: Brain,
  workstyle: Briefcase,
  lifestyle: Sun,
};

/** One assessment section: header, its questions, and back/continue nav. */
export function SectionScreen({ sectionIndex, answers, setAnswer, setScreen }) {
  const section = SECTIONS[sectionIndex];
  const SectionIcon = SECTION_ICONS[section.id] ?? Sparkles;
  const isLast = sectionIndex === SECTIONS.length - 1;

  const unanswered = section.questions.filter(
    (q) => !isQuestionAnswered(q, answers),
  );

  const handleContinue = () => {
    if (unanswered.length > 0) {
      toast.message(
        `${unanswered.length} question${unanswered.length > 1 ? 's' : ''} left in this section.`,
      );
      return;
    }
    setScreen(isLast ? 'results' : sectionIndex + 1);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2e7d8c]/10">
          <SectionIcon className="h-5 w-5 text-[#2e7d8c]" />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2e7d8c]">
            Section {sectionIndex + 1} of {SECTIONS.length}
          </p>
          <h2 className="font-serif text-2xl font-bold text-[#1e4d5c]">
            {section.title}
          </h2>
        </div>
      </div>
      {section.subtitle && (
        <p className="mt-1 text-sm text-stone-600">{section.subtitle}</p>
      )}

      <div className="mt-6 space-y-5">
        {section.questions.map((question) => (
          <QuestionBlock
            key={question.id}
            question={question}
            scale={section.scale}
            answers={answers}
            setAnswer={setAnswer}
          />
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setScreen(sectionIndex === 0 ? 'intro' : sectionIndex - 1)}
        >
          Back
        </Button>
        <Button
          className="bg-[#1e4d5c] text-white hover:bg-[#2e7d8c]"
          onClick={handleContinue}
        >
          {isLast ? 'See my results' : 'Continue'}
        </Button>
      </div>
    </div>
  );
}
