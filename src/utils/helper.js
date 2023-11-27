import moment from 'moment'

export const datesProducts = [
    {
        date:'25/12/2023',
        product:'Navidad'
    },
    {
        date:'10/05/2023',
        product:'Dia de la madre'
    },
    {
        date:'30/04/2023',
        product:'Dia del Niño'
    },
    {
        date:'16/06/2023',
        product:'Dia del Padre'
    },
    {
        date:'24/02/2023',
        product:'Dia del Amor y la Amistad'
    },
]

export function formatDate(dateString) {
    return moment(dateString, 'DD/MM/YYYY').format('DD [de] MMMM [del] YYYY');
  }