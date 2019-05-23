import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-profile-editor",
  templateUrl: "./profile-editor.component.html",
  styleUrls: ["./profile-editor.component.sass"],
})
export class ProfileEditorComponent {
  public profileForm: FormGroup = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    address: new FormGroup({
      street: new FormControl(""),
      city: new FormControl(""),
      state: new FormControl(""),
      zip: new FormControl(""),
    }),
  });

  updateProfile() {
    this.profileForm.patchValue({
      firstName: "Nancy",
      address: {
        street: "123 Drew Street",
      },
    });
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
