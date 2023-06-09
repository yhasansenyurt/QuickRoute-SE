import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  users: any;
  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {
    this.registerService.users().subscribe((data) => {
      this.users = data;
    });
  }

  getUserFormData(data: any) {
    // Girişleri kontrol et
    if (
      !data.email ||
      !data.firstName ||
      !data.lastName ||
      !data.phoneNumber ||
      !data.password ||
      (data.radioOne && data.radioTwo)
    ) {
      // Eksik giriş var, uyarı mesajı göster
      alert('Lütfen tüm alanları doldurun.');
      return;
    }

    console.warn(data);
    this.registerService.saveUser(data).subscribe((result) => {
      console.warn(result);
      if (result) {
        this.router.navigateByUrl('/login-page');
      } else {
        console.log('Bir hata oluştu.');
        alert('Kayıt işlemi başarısız oldu.');
      }
    });
  }

  ngOnInit(): void {}
}
