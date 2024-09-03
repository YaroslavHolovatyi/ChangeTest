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

  //TODO Angular provides two main change detection strategies: Default and OnPush

  //    In the default strategy, Angular performs change detection on the entire component tree whenever an event occurs, 
  //    such as user input, HTTP request, or any asynchronous operation. Angular checks every binding in every component to see if it has changed. 
  //    This strategy ensures that all changes are detected and reflected in the UI, but it can lead to performance issues in large applications with deep component trees 
  //    or complex UIs. The more components and bindings my application will have, the more checks Angular has to perform, potentially slowing down the whole application.
  //    I prefer using it whenI am working on small or medium application or when I need to ensure that all binds are always up to date without any manual optimization.

  //    The OnPush strategy optimizes change detection by only checking a component's bindings under specific conditions:
  //     - When an @Input property changes reference (for non-primitive types).
  //     - When an event originates from within the component (e.g., a click event).
  //     - When an observable bound to the template emits a new value.
  //      The OnPush strategy significantly improves performance by reducing the number of checks Angular needs to perform.
  //      Since it only checks components when necessary, it can make our application more efficient, especially in scenarios with complex or deep component trees.
  //      OnPush is to be used when:
  //      Components rely heavily on immutable data.
  //      There are performance concerns due to a large or complex component tree.
  //      When manually optimizztion of change detection will be better for performance of the application.


  // TODO Hierarchical Dependency Injection
  //  I could state that benefits of HDI can be:
  // - Flexibility: Angular’s hierarchical DI system allows us to configure how services are shared across different parts of the application. Services can be shared globally or scoped to specific modules or components.
  // - Scoping: You can scope services to different levels in the component tree, allowing for better encapsulation and modularity.
  // - Overriding Services: Hierarchical DI allows overriding of services at different levels. A service provided at the root level can be overridden at a component level, giving that component and its children a different instance of the service.
  // - Lazy Loading and Module-Level Providers


  // For services that need to be shared across the entire application, such as authentication, logging, or configuration services we will use global services.
  // For services that are specific to a particular feature module. This is useful in modular applications where certain features are loaded lazily we will use module services
  // And component leveled services for services that should be scoped to a specific component and its children
}
