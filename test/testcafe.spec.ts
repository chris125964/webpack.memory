import MemoryPM from './pageModel';
import ModalPM from './modal.pageModel';
import { Selector } from 'testcafe';

fixture`Getting Started`.page`http://localhost:9000`;

test('Memory - best moves', async (t) => {
  // Test code
  await t.resizeWindow(1600, 800);

  for (let loop = 0; loop < 12; loop += 1) {
    MemoryPM.clickTile(t, loop);
    MemoryPM.clickTile(t, loop, false);
  }
  ModalPM.closeModal(t);
  MemoryPM.clickNewGame(t);
  await t.debug();
});
