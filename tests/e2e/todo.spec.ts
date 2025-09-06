import { test, expect } from "@playwright/test";

test("добавление и удаление задачи", async ({ page }) => {
    await page.goto("http://127.0.0.1:3000");

    // Добавляем задачу
    await page.fill('[data-testid="task-input"]', "Подзаправить свои электролиты");

    // таймауты для наглядности, потом уберу!
    await page.waitForTimeout(2000)
    await page.click('[data-testid="add-task-btn"]');
    await page.waitForTimeout(2000)

    // Проверяем, что задача появилась
    await expect(page.locator('[data-testid="task-list"] li')).toHaveCount(1);
    await page.waitForTimeout(2000)

    // Удаляем задачу (клик по кнопке ✖ внутри li)
    await page.click('[data-testid="task-list"] li button:text("✖")');
    await page.waitForTimeout(2000)

    // Проверяем, что список пустой
    await expect(page.locator('[data-testid="task-list"] li')).toHaveCount(0);

    await page.waitForTimeout(2000)
});
