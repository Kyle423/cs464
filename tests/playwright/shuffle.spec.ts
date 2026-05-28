import { test, expect } from '@playwright/test'

import { clickButtonByText, getPuzzleItems } from "./utils/interactions"

test('Shuffle changes item order', async ({ page }) => {
  // Go to a puzzle page
  await page.goto('http://localhost:3000/puzzle/planets')

  // Get the initial order of items
  const initialOrder = await getPuzzleItems(page)
  const initialLabels = initialOrder.map(item => item.label)

  // Click the Shuffle button
  await clickButtonByText(page, "Shuffle")

  // Get the new order of items
  const shuffledOrder = await getPuzzleItems(page)
  const shuffledLabels = shuffledOrder.map(item => item.label)

  // Verify that at least one item has moved (order is different)
  expect(shuffledLabels).not.toEqual(initialLabels)
})
