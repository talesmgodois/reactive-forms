import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-profile-editor",
  templateUrl: "./profile-editor.component.html",
  styleUrls: ["./profile-editor.component.sass"],
})
export class ProfileEditorComponent {
  public profileForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
  });

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
