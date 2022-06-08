const MoveFinger = (entities: any, { touches }: any) => {
  touches.filter((t: any) => t.type === "move").forEach((t: any) => {
    let finger = entities[t.id];
    if (finger && finger.position) {
      finger.position = [
        finger.position[0] + t.delta.pageX,
        finger.position[1] + t.delta.pageY
      ];
    }
  });

  return entities;
}

export { MoveFinger };