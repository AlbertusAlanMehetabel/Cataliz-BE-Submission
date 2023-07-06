const moveDiscs = (discs, A, C, B) => {
  const stack = [{ discs, A, C, B }];

  while (stack.length > 0) {
    const { discs, A, C, B } = stack.pop();

    if (discs === 1) {
      console.log(`Pindahkan Disk dari menara ${A} ke menara ${C}`);
    } else {
      stack.push({ discs: discs - 1, A: B, C, B: A });
      stack.push({ discs: 1, A, C, B });
      stack.push({ discs: discs - 1, A, C: B, B: C });
    }
  }
};

const howManyStep = discs => {
  const minStep = Math.pow(2, discs) - 1;
  console.log(`Jumlah langkah minimal yang dibutuhkan: ${minStep}`);
};

const discs = 3;
moveDiscs(discs, 'A', 'C', 'B');
howManyStep(discs);
