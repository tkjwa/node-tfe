export const enum RunStatus {
  applied = 'applied',
  applyQueued = 'apply_queued',
  applying = 'applying',
  canceled = 'canceled',
  confirmed = 'confirmed',
  costEstimated = 'cost_estimated',
  costEstimating = 'cost_estimating',
  discarded = 'discarded',
  errored = 'errored',
  pending = 'pending',
  planQueued = 'plan_queued',
  planned = 'planned',
  plannedAndFinish = 'planned_and_finished',
  planning = 'planning',
  policyChecked = 'policy_checked',
  policyChecking = 'policy_checking',
  policyOverride = 'policy_override',
  policySoftFailed = 'policy_soft_failed',
}
