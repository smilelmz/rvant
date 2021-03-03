export default {
  name: 'İsim',
  tel: 'Telefon',
  save: 'Kaydet',
  confirm: 'Onayla',
  cancel: 'İptal',
  delete: 'Sil',
  complete: 'Tamamla',
  loading: 'Yükleniyor...',
  telEmpty: 'Lütfen tel. no giriniz',
  nameEmpty: 'Lütfen isim giriniz',
  nameInvalid: 'Geçersiz isim',
  confirmDelete: 'Silmek istediğinize emin misiniz?',
  telInvalid: 'Geçersiz tel. numarası',
  vanCalendar: {
    end: 'Son',
    start: 'Başlat',
    title: 'Takvim',
    startEnd: 'Başlat/Son',
    weekdays: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `En fazla ${maxRange} gün seçin`
  },
  vanCascader: {
    select: 'Seçiniz'
  },
  vanContactCard: {
    addText: 'Kişi bilgisi ekle'
  },
  vanContactList: {
    addText: 'Yeni kişi ekle'
  },
  vanPagination: {
    prev: 'Önceki',
    next: 'Sonraki'
  },
  vanPullRefresh: {
    pulling: 'Yenilemek için çekin...',
    loosing: 'Yenilemek için bırakın...'
  },
  vanSubmitBar: {
    label: 'Toplam:'
  },
  vanCoupon: {
    unlimited: 'Sınırsız',
    discount: (discount: number) => `%${discount * 10} indirim`,
    condition: (condition: number) => `En az ${condition}`
  },
  vanCouponCell: {
    title: 'Kupon',
    tips: 'Kupon yok',
    count: (count: number) => `${count} adet teklif var`
  },
  vanCouponList: {
    empty: 'Kupon yok',
    exchange: 'Takas',
    close: 'Kapat',
    enable: 'Mevcut',
    disabled: 'Mevcut değil',
    placeholder: 'Kupon kodu'
  },
  vanAddressEdit: {
    area: 'Alan',
    postal: 'Posta',
    areaEmpty: 'Lütfen alıcı alanını seçin',
    addressEmpty: 'Adres boş olamaz!',
    postalEmpty: 'Yanlış posta kodu',
    defaultAddress: 'Varsayılan adres olarak ayarla',
    telPlaceholder: 'Telefone',
    namePlaceholder: 'İsim',
    areaPlaceholder: 'Alan'
  },
  vanAddressEditDetail: {
    label: 'Adres',
    placeholder: 'Adres'
  },
  vanAddressList: {
    add: 'Yeni adres ekle'
  }
}
