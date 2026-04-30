// Predefined tasks for Task Spar mode
// These are randomly selected each round and won't repeat consecutively

export const TRAINING_TASKS = [
  "Land 15 jabs",
  "Land 5 1-2 combinations",
  "Land 20 low kicks",
  "Only body shots",
  "Defend and counter only",
  "Only teeps for 30 seconds",
  "No head strikes",
  "Clinch work only",
  "Footwork focus - circle around",
  "Land 10 kicks",
  "Only sweeps allowed",
  "Keep hands up - no offensive strikes",
  "Switch stance every 10 seconds",
  "Land 8 elbows",
  "Pressure and push pace",
  "Target the liver",
  "Triangle step drill",
  "Catch kicks and counter",
  "Explosive combinations",
  "Grappling exchanges only",
];

/**
 * Selects a random task from the predefined list
 * Ensures the same task doesn't repeat consecutively
 * @param previousTask - The task from the previous round (to avoid repetition)
 * @returns A random task that is different from the previousTask
 */
export const getRandomTask = (previousTask?: string): string => {
  let availableTasks = TRAINING_TASKS;

  // Filter out the previous task to avoid repetition
  if (previousTask) {
    availableTasks = TRAINING_TASKS.filter(task => task !== previousTask);
  }

  const randomIndex = Math.floor(Math.random() * availableTasks.length);
  return availableTasks[randomIndex];
};

/**
 * Get a random subset of tasks for the entire session
 * Useful for planning or previewing tasks
 * @param count - Number of tasks to return
 * @returns Array of random unique tasks
 */
export const getTaskSequence = (count: number): string[] => {
  const tasks: string[] = [];
  let previousTask: string | undefined;

  for (let i = 0; i < count; i++) {
    const task = getRandomTask(previousTask);
    tasks.push(task);
    previousTask = task;
  }

  return tasks;
};
