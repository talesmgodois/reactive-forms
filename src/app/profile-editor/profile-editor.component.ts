import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-profile-editor",
  templateUrl: "./profile-editor.component.html",
  styleUrls: ["./profile-editor.component.sass"],
})
export class ProfileEditorComponent {
  constructor(private fb: FormBuilder) {}

  public profileForm: FormGroup = this.fb.group({
    firstName: ["", Validators.required],
    lastName: [""],
    address: this.fb.group({
      street: [""],
      city: [""],
      state: [""],
      zip: [""],
    }),
    aliases: this.fb.array([this.fb.control("")]),
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

  get aliases() {
    // This is an AbstractControl, so we have to provide an explicit type
    // this.profileForm.get("aliases")
    return this.profileForm.get("aliases") as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(""));
  }
}
