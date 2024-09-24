const TargetBlankExtension = (md: any) => {
  const defaultRender =
    md.renderer.rules.link_open ||
    function (tokens: any, idx: number, options: any, env: any, self: any) {
      return self.renderToken(tokens, idx, options);
    };

  md.renderer.rules.link_open = function (
    tokens: any,
    idx: number,
    options: any,
    env: any,
    self: any,
  ) {
    const aIndex = tokens[idx].attrIndex("target");

    if (aIndex < 0) {
      tokens[idx].attrPush(["target", "_blank"]);
    } else {
      tokens[idx].attrs[aIndex][1] = "_blank";
    }

    // pass token to default renderer.
    return defaultRender(tokens, idx, options, env, self);
  };
};

export default TargetBlankExtension;
