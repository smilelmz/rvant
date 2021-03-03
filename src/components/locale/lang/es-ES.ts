export default {
  name: 'Nombre',
  tel: 'Teléfono',
  save: 'Guardar',
  confirm: 'Confirmar',
  cancel: 'Cancelar',
  delete: 'Eliminar',
  complete: 'Completado',
  loading: 'Cargando...',
  telEmpty: 'Por favor rellena el teléfono',
  nameEmpty: 'Por favor rellena el nombre',
  nameInvalid: 'nombre inválido',
  confirmDelete: 'Estás seguro de eliminarlo?',
  telInvalid: 'Teléfono inválido',
  vanCalendar: {
    end: 'Fin',
    start: 'Inicio',
    title: 'Calendario',
    startEnd: 'Inicio/Fin',
    weekdays: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Elija no más de ${maxRange} días`
  },
  vanCascader: {
    select: 'Seleccione'
  },
  vanContactCard: {
    addText: 'Añadir información de contacto'
  },
  vanContactList: {
    addText: 'Añadir nuevo contacto'
  },
  vanPagination: {
    prev: 'Anterior',
    next: 'Siguiente'
  },
  vanPullRefresh: {
    pulling: 'Tira para recargar...',
    loosing: 'Suelta para recargar...'
  },
  vanSubmitBar: {
    label: 'Total：'
  },
  vanCoupon: {
    unlimited: 'Ilimitado',
    discount: (discount: number) => `${discount * 10}% de descuento`,
    condition: (condition: number) => `Al menos ${condition}`
  },
  vanCouponCell: {
    title: 'Cupón',
    tips: 'Sin cupones',
    count: (count: number) => `You have ${count} coupons`
  },
  vanCouponList: {
    empty: 'Sin cupones',
    exchange: 'Intercambio',
    close: 'Cerrar',
    enable: 'Disponible',
    disabled: 'No disponible',
    placeholder: 'Código del cupón'
  },
  vanAddressEdit: {
    area: 'Área',
    postal: 'Código Postal',
    areaEmpty: 'Por favor selecciona una área de recogida',
    addressEmpty: 'La dirección no puede estar vacia',
    postalEmpty: 'Código postal inválido',
    defaultAddress: 'Establecer como dirección por defecto',
    telPlaceholder: 'Teléfono',
    namePlaceholder: 'Nombre',
    areaPlaceholder: 'Área'
  },
  vanAddressEditDetail: {
    label: 'Dirección',
    placeholder: 'Dirección'
  },
  vanAddressList: {
    add: 'Anadir dirección'
  }
}
