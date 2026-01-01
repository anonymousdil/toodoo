// Utility functions

/**
 * Format a date to a readable string
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Generate a unique ID
 * @returns {number} Unique timestamp-based ID
 */
export const generateId = () => {
  return Date.now()
}
