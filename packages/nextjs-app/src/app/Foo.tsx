"use client";

import { useEffect } from "react";
import { Something } from "my-common-package";

export default function Foo() {
  useEffect(() => {
    const foo = new Something();

    console.log(foo.commonThing);
  }, []);

  return <div>Foo</div>;
}
