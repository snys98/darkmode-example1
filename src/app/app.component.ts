import { Component } from "@angular/core";

@Component({
  selector: "nz-demo-form-validate-static",
  template: `
  <nz-alert nzType="success" nzMessage="Success Tips" nzShowIcon></nz-alert>
    <nz-alert nzType="info" nzMessage="Informational Notes" nzShowIcon></nz-alert>
    <nz-alert nzType="warning" nzMessage="Warning" nzShowIcon></nz-alert>
    <nz-alert nzType="error" nzMessage="Error" nzShowIcon></nz-alert>
    <nz-alert
      nzType="success"
      nzMessage="Success Tips"
      nzDescription="Detailed description and advices about successful copywriting."
      nzShowIcon
    >
    </nz-alert>
    <nz-alert
      nzType="info"
      nzMessage="Informational Notes"
      nzDescription="Additional description and informations about copywriting."
      nzShowIcon
    >
    </nz-alert>
    <nz-alert
      nzType="warning"
      nzMessage="Warning"
      nzDescription="This is a warning notice about copywriting."
      nzShowIcon
    >
    </nz-alert>
    <nz-alert nzType="error" nzMessage="Error" nzDescription="This is an error message about copywriting." nzShowIcon>
    </nz-alert>
    <form nz-form [nzLayout]='"inline"'>
            <nz-form-item>
        <nz-form-label [nzSpan]="12">Warning</nz-form-label>
        <nz-form-control nzValidateStatus="warning" [nzSpan]="12">
          <input nz-input [ngModel]="'Warning'" name="warningValid" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="12">Validating</nz-form-label>
        <nz-form-control
          [nzSpan]="12"
          nzValidateStatus="validating"
          nzHasFeedback
          nzValidatingTip="I'm validating the content"
        >
          <input
            nz-input
            [ngModel]="'The content is being validated'"
            name="validating"
          />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="12">Success</nz-form-label>
        <nz-form-control [nzSpan]="12" nzValidateStatus="success" nzHasFeedback>
          <input nz-input [ngModel]="'The content'" name="successValid" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="12">Warning</nz-form-label>
        <nz-form-control
          [nzSpan]="12"
          nzValidateStatus="warning"
          nzHasFeedback
          nzWarningTip="Should be combination of numbers & alphabets"
        >
          <input nz-input [ngModel]="'Warning'" name="warningHighValid" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="12">Fail</nz-form-label>
        <nz-form-control
          [nzSpan]="12"
          nzValidateStatus="error"
          nzHasFeedback
          nzErrorTip="Should be combination of numbers & alphabets"
        >
          <input
            nz-input
            [ngModel]="'unavailable choice'"
            name="invalidValid"
          />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="12">Success</nz-form-label>
        <nz-form-control [nzSpan]="12" nzValidateStatus="success" nzHasFeedback>
          <nz-date-picker name="date-picker-success"></nz-date-picker>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="12">Warning</nz-form-label>
        <nz-form-control [nzSpan]="12" nzValidateStatus="warning" nzHasFeedback>
          <nz-time-picker name="time-picker-warning"></nz-time-picker>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="12">Error</nz-form-label>
        <nz-form-control [nzSpan]="12" nzValidateStatus="error" nzHasFeedback>
          <nz-select name="select-error" [ngModel]="'Option 1'">
            <nz-option nzValue="Option 1" nzLabel="Option 1"></nz-option>
            <nz-option nzValue="Option 2" nzLabel="Option 2"></nz-option>
          </nz-select>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="12">Validating</nz-form-label>
        <nz-form-control
          [nzSpan]="12"
          nzValidateStatus="validating"
          nzHasFeedback
        >
          <nz-select name="select-validate" [ngModel]="'Option 2'">
            <nz-option nzValue="Option 1" nzLabel="Option 1"></nz-option>
            <nz-option nzValue="Option 2" nzLabel="Option 2"></nz-option>
          </nz-select>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="12">Success</nz-form-label>
        <nz-form-control [nzSpan]="12" nzValidateStatus="success" nzHasFeedback>
          <nz-input-number
            name="inputnumber-success"
            style="width:100%"
          ></nz-input-number>
        </nz-form-control>
      </nz-form-item>
    </form>
    <button nz-button nzType="danger" nzSize="large" (click)="toogleDarkMode()">ToggleDarkMode</button>
  `,
  styles: [
    `
      [nz-form] {
      }

      nz-date-picker ::ng-deep .ant-calendar-picker {
        width: 100%;
      }

      nz-date-picker,
      nz-time-picker {
        width: 100%;
      }
    `
  ]
})
export class NzDemoFormValidateStaticComponent {
  darkModeStyleNode = document.createElement('style');
  constructor(){
    this.darkModeStyleNode.id = "dark-reader-style"
    this.darkModeStyleNode.innerHTML = `@media screen {
/* Leading rule */
html {
  -webkit-filter: url(#dark-reader-filter) !important;
  filter: url(#dark-reader-filter) !important;
}

/* Reverse rule */
img,
video,
:not(object):not(body)>embed,
object,
svg image,
[style*="background:url"],
[style*="background-image:url"],
[style*="background: url"],
[style*="background-image: url"],
[background],
twitterwidget {
  -webkit-filter: url(#dark-reader-reverse-filter) !important;
  filter: url(#dark-reader-reverse-filter) !important;
}
[style*="background:url"] *,
[style*="background-image:url"] *,
[style*="background: url"] *,
[style*="background-image: url"] *,
input,
[background] *,
img[src^="https://s0.wp.com/latex.php"],
twitterwidget .NaturalImage-image {
  -webkit-filter: none !important;
  filter: none !important;
}
.compatibility-with-darkreader-below-4-3-3 {
  background: white !important;
}

/* Text contrast */
html {
  text-shadow: 0 0 0 !important;
}

/* Full screen */
:-webkit-full-screen, :-webkit-full-screen * {
  -webkit-filter: none !important;
  filter: none !important;
}
:-moz-full-screen, :-moz-full-screen * {
  -webkit-filter: none !important;
  filter: none !important;
}
:fullscreen, :fullscreen * {
  -webkit-filter: none !important;
  filter: none !important;
}

/* Page background */
html {
  background: rgb(38,38,38) !important;
}

/* Custom rules */
.compatibility-with-darkreader-below-4-3-3 {
    background: white !important;
}

}`;
  }
  toogleDarkMode() {
    if (document.head.querySelector("#dark-reader-style")) {
      document.head.removeChild(this.darkModeStyleNode);
    } else {
      document.head.appendChild(this.darkModeStyleNode);
    }
  }
}
