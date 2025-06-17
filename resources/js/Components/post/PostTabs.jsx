import React from "react";
import { Tabs, Tab } from "@heroui/react";
import EditorTab from "@/Components/post/EditorTab";
import AdvancedTab from "@/Components/post/AdvancedTab";

export default function PostTabs({ onSaveRegister }) {
  return (
    <Tabs aria-label="Options" color="primary" variant="bordered">
      <Tab key="editor" title={<span>Editor</span>}>
        <EditorTab onSaveRegister={onSaveRegister} />
      </Tab>
      <Tab key="advanced" title={<span>Advanced</span>}>
        <AdvancedTab />
      </Tab>
    </Tabs>
  );
}