import { UserService } from './../services/user.service';
import { User } from './../model/user';
import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private userService: UserService, private cd: ChangeDetectorRef) { }

  id: number;
  username: string;
  password: string;
  listaPessoas: User[];
  pessoasPesquisadas: User[];
  newUser: User;
  pessoasExcluir: User[];

  deleteUser(){
    // this.pessoasExcluir = 
  }

  incluirUser(){
    this.newUser = new User();
    this.newUser.id = this.id;
    this.newUser.username = this.username;
    this.newUser.password = this.password;
    this.newUser.isActive = true;
    console.log(this.newUser.username);
    this.userService.postUser(this.newUser).subscribe(usr => {
      console.log("Foi");
    });
  }

  verificarDados() {
    if (this.username != null && this.username != "" && this.password != null && this.password != "") {
      return true;
    }
    return false;
  }

  pesquisaUsers() {
    this.userService.getAllUsers().subscribe(pessoas => {
      this.listaPessoas = pessoas;

      if (this.username != null && this.username != "") {
        this.pessoasPesquisadas = this.listaPessoas.filter((pessoa) => {
          if (pessoa.username != null && pessoa.username.toLowerCase().match(this.username.toLowerCase())) {
            return pessoa;
          }
        })
      }
      else {
        this.pessoasPesquisadas = this.listaPessoas;
      }
      this.cd.detectChanges();
    });
  }
}
