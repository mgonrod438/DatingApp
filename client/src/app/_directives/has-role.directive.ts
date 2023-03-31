import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { take } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Directive({
  selector: '[appHasRole]' // *appHasRole = '["Admin","lo que sea..."]'   Si se cumple lo que está en el array se muestra una cosa, si no, se deja de mostrar.
})
export class HasRoleDirective implements OnInit {
  @Input() appHasRole: string[] = [];
  user: User = {} as User;

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>,
    private accountervice: AccountService) {

      this.accountervice.currentUser$.pipe(take(1)).subscribe({
        next: user => {
          if (user) this.user = user
        }
      })
     }
  ngOnInit(): void {
    if (this.user.roles.some(r => this.appHasRole.includes(r))){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainerRef.clear()
    }
  }

}
