type TMemView = {
  device: string;
  horizontal: number;
  vertical: number;
  length: number;
  header: {
    height: number;
    fontSize: number;
  };
};

/**
 * returns the viewport extensions which are required for the responsive designs
 *
 * @return {TMemView}
 */
export const getView = () => {
  let memView: TMemView = {
    device: 'unknown',
    horizontal: 4,
    vertical: 5,
    length: 80,
    header: { height: 96, fontSize: 12 },
  };
  if (window.innerWidth <= 320) {
    // Unihertz: 320 x 496 -> size: 80px
    // 96 + (4 x 80) x (5 x 80)
    memView.device = 'Unihertz';
    memView.horizontal = 4;
    memView.vertical = 5;
    memView.length = 80;
    memView.header.height = 96;
  } else if (window.innerWidth <= 360) {
    // 360 x 648 -> size: 90px
    memView.device = 'Galaxy S40';
    memView.horizontal = 4;
    memView.vertical = 6;
    memView.length = 90;
    memView.header.height = 108;
  } else if (window.innerWidth <= 600) {
    // Nexus Hoch: 600 x 792 -> size: 120px
    // 72px + (5 x 120) x (6 x 120)
    memView.device = 'Nexus (hoch)';
    memView.horizontal = 5;
    memView.vertical = 6;
    memView.length = 120;
    memView.header.height = 72;
  } else if (window.innerWidth <= 640) {
    memView.device = 'Samsung S40';
    memView.horizontal = 4;
    memView.vertical = 5;
    memView.length = 120;
    memView.header.height = 50;
  } else if (window.innerWidth <= 960) {
    // Nexus Quer: 960 x 432 -> size: 120px
    // 72px  + (8 x 120) x (3 x 120)
    memView.device = 'Nexus (quer)';
    memView.horizontal = 8;
    memView.vertical = 3;
    memView.length = 120;
    memView.header.height = 72;
  } else {
    // } else if (window.innerWidth <= 1500) {
    //  -> 150px
    // 50px + (10 x 150) x (5 x 150)
    memView.device = 'Notebook';
    memView.horizontal = 8;
    memView.vertical = 4;
    memView.length = 150;
    memView.header.height = 50;
  }

  return memView;
};
