import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-name-editor",
  templateUrl: "./name-editor.component.html",
  styleUrls: ["./name-editor.component.sass"],
})
export class NameEditorComponent {
  name = new FormControl("");

  updateValue(): void {
    this.name.setValue("Nancy");
  }
}
