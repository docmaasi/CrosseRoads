import type { Career } from '../types';
import { healthcareCareers } from './healthcare';
import { businessCareers } from './business';
import { technologyCareers } from './technology';
import { creativeCareers } from './creative';
import { tradesCareers } from './trades';
import { educationCareers } from './education';
import { financeCareers } from './finance';
import { salesCareers } from './sales';

export const CAREERS: Career[] = [
  ...healthcareCareers,
  ...businessCareers,
  ...technologyCareers,
  ...creativeCareers,
  ...tradesCareers,
  ...educationCareers,
  ...financeCareers,
  ...salesCareers,
];
