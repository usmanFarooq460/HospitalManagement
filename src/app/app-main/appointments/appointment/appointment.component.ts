import { formatDate } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { BaseActions } from "src/app/shared/shared-classes/base-actions";
import { AppointmentServiceService } from "../appointment-service.service";

@Component({
  selector: "app-appointment",
  templateUrl: "./appointment.component.html",
  styleUrls: ["./appointment.component.scss"],
})
export class AppointmentComponent extends BaseActions implements OnInit {
  formdata: any;
  updateId: any;
  allAppointmentsList = [];
  patientslist = [];

  constructor(
    private service: AppointmentServiceService,
    private formBuilder: FormBuilder
  ) {
    super();
    this.initForm();
  }

  initForm() {
    this.formdata = this.formBuilder.group({
      appointmentDate: [
        formatDate(new Date(), "yyyy-MM-dd", "en"),
        [Validators.required],
      ],
      patient: [null, [Validators.required]],
      doctor: [null, [Validators.required]],
      department: [null, [Validators.required]],
      ward: [null],
      reason: [null],
    });
  }

  get form() {
    return this.formdata.controls;
  }

  ngOnInit(): void {
    this.getAppointmentHistory();
    this.getPatients();
    this.getDepartments();
  }

  getById(data) {
    this.updateId = data._id;
    this.formdata.patchValue({
      appointmentDate: formatDate(
        new Date(data.appointmentDate),
        "yyyy-MM-dd",
        "en"
      ),
      patient: data.patient._id,
      doctor: data.doctor,
      department: data.department._id,
      reason: data.reason,
    });
  }

  getPatients() {
    this.service.getPatientsHistory().subscribe(
      (resp) => {
        console.log("patients histpory: ", resp);
        this.patientslist = resp;
      },
      (err) => {
        console.log("err: ", err);
        this.errorPopup(err.message);
      }
    );
  }

  departmentList = [];

  getDepartments() {
    this.service.getHistoryOfDepartment().subscribe(
      (resp) => {
        console.log("deparmtents: ", resp);
        this.departmentList = resp;
      },

      (err) => {
        console.log("err: ", err);
        this.errorPopup(err.message);
      }
    );
  }

  getAppointmentHistory() {
    this.isLoading = true;
    this.service.getAppointmentHistory().subscribe(
      (resp) => {
        this.isLoading = false;
        this.allAppointmentsList = resp;
        console.log("appoint ment history: ", resp);
      },
      (err) => {
        this.isLoading = false;
        this.errorPopup(err.message);
      }
    );
  }

  clear() {
    this.updateId = null;
    this.initForm();
  }

  Save() {
    if (this.formdata.valid == false) {
      this.formdata.markAllAsTouched();
      return;
    }
    this.loaderOn_Save_Update = true;
    this.service.saveAppointment(this.formdata.value).subscribe(
      (resp) => {
        this.loaderOn_Save_Update = false;
        this.SuccessPopup("Successfully added");
        this.getAppointmentHistory();
        this.clear();
      },
      (err) => {
        this.loaderOn_Save_Update = false;
        this.errorPopup(err.message);
      }
    );
  }

  update(id) {
    if (this.formdata.invalid) {
      this.formdata.markAllAsTouched();
      return;
    }
    this.loaderOn_Save_Update = true;
    this.service
      .updateAppointment(this.updateId, this.formdata.value)
      .subscribe(
        (resp) => {
          this.SuccessPopup("Data has updated");
          this.clear();
          this.loaderOn_Save_Update = false;
          this.getAppointmentHistory();
        },
        (err) => {
          this.errorPopup(err.message);
        }
      );
  }

  deleteStaff(Id) {
    console.log("id for delete : ", Id);
    this.service.deleteAppointment(Id).subscribe(
      (resp) => {
        this.SuccessPopup("Deleted Successfully");
        console.log("deleted: ", resp);
        this.getAppointmentHistory();
      },
      (err) => {
        console.log("err in deleting ", err);
        this.errorPopup(err.message);
      }
    );
  }
}
