import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  users = [
    {
      id: 1,
      name: 'tuannda3',
      age: 20,
      phone: '0392871868',
      avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
    },
    {
      id: 2,
      name: 'tuannda4',
      age: 22,
      phone: '0392871868',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSla-p7MqWVSLL2rpSQHlxEO6mKceKYPvZjo4oslefoeXE7-oMcRHP5IfT3qgllHC8kKvQ&usqp=CAU',
    },
    {
      id: 3,
      name: 'tuannda5',
      age: 24,
      phone: '0392871868',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLg7YYue_VyRsQLCwmguYP8nSLBwe24G8WgqJr8i_YxHwyHXbn9wqkZXAwdAvSGF9kVMk&usqp=CAU',
    },
  ];

  // Định nghĩa 1 mảng trung gian lưu kết quả search để không bị ảnh hưởng đến giá trị user gốc
  filterUser = this.users;

  //Định nghĩa hàm xóa khi click nút delete
  confirmRemove(userId: number): void {
    if (confirm('Are you sure you want to delete')) {
      this.remove(userId);
    }
  }
  remove(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  convertToUnicode(value: string) {
    const a =
      'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;';
    const b =
      'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------';
    const p = new RegExp(a.split('').join('|'), 'g');
    return value
      .toString()
      .toLowerCase()
      .replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a')
      .replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e')
      .replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i')
      .replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o')
      .replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u')
      .replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y')
      .replace(/đ/gi, 'd')
      .replace(/\s+/g, '-')
      .replace(p, (c) => b.charAt(a.indexOf(c)))
      .replace(/&/g, '-and-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  onSearch(event: any) {
    //1. Lấy keyword, đưa keyword và value về chữ thường
    const lowerCaseValue = event.target.value.toLowerCase();
    //2. Xử lý khoảng trắng trong keyword
    let keyWord = lowerCaseValue.trim();
    keyWord = this.convertToUnicode(keyWord);    
    //3. Filter username theo keyword
    this.filterUser = this.users.filter(
      (user) => user.name.toLowerCase().indexOf(keyWord) !== -1
    );
  }
}
