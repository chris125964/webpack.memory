import { MemoryPM } from './pageModel';
import { ModalPM } from './modal.pageModel';
import { Selector } from 'testcafe';

fixture`Getting Started`.page`http://localhost:9000`;

const memoryPM = new MemoryPM();
const modalPM = new ModalPM();

test('Memory - best moves', async (t) => {
  // Test code
  await t.resizeWindow(1000, 800);
  await t.debug();

  for (let loop = 0; loop < 15; loop += 1) {
    await t.debug();
    memoryPM.clickTile(t, loop);
    memoryPM.clickTile(t, loop, false);
  }
  await t.debug();
  modalPM.closeModal(t);
  memoryPM.clickNewGame(t);
  await t.debug();
});
