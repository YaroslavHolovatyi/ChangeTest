import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { LoggingService } from '../logging-s.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  // default change detection strategy is used, and we do not need to specify it in the code because default.
  // changeDetection:ChangeDetectionStrategy.OnPush
  providers: [LoggingService]
})
export class ParentComponent {

  constructor(private loggingService: LoggingService) {}


  pData: string = "Primitive";
  nPData = {name:"Not Primitive"};


  changePD(){
    this.pData = "Primitive Update"
  }

  changeNPD(){
    this.nPData.name = 'NotPrimitiveUpdated';
    console.log(this.nPData.name)
  }

  changeNPDR(){
    this.nPData = {name: "This is changed/updated reference"}
  }
//-----------Log in service-------------------

  logMessage() {
    this.loggingService.log('Message from Parent Component');
  }

}
