import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DragDropPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.navigate('/drag-and-drop');
  }

  async drag() {
    await this.page.dragAndDrop('#column-a', '#column-b');
  }
}
