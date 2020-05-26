import React from "react";

export class test{
  start(dataMessage) {
  return <div>Hello {dataMessage}</div>
  }
}

export default function() {
  let start = new test();
  return start.start('world')
}
