import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LoggingService } from '../logging-s.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoggingService] // Providing the service at the child component level
})
export class ChildComponent {

  constructor(private loggingService: LoggingService) {}

  @Input() pData: any;
  @Input() nPData: any;

  initialCD : string = "Initial Child Data";

  updateChildData(){
    this.initialCD = "Updated Child Data"
  } 

  //-----------log-------------
  logMessage() {
    this.loggingService.log('Message from Child Component');
  }


}
