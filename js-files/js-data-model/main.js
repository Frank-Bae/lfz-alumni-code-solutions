// essentially im iterating through each object of the array 
const orderHistory = [
    {
        orderPlaced: 'August 4, 2020',
        shipTo: 'JS Masher',
        orderDetails: '1134-2323-23-213-445-4',
        item: [
            {
                name: 'Javascript for impatient programmers',
                price: '$82.00',
                author: 'Alex',
                delivery: 'Aug 8, 2020',
                trackingNumber: 'xxishjd9sdh23ksjd'
            },
            {
                name: 'The best book',
                price: '$10.00',
                author: 'unknown',
                delivery: 'Sep 01 2020',
                trackingNumber: 'isajdoisajd0sadjsa0dj'
            }
        ],
        total: '$92.00'
    },
    {
        orderPlaced: 'August 28, 2020',
        shipTo: 'JS Other',
        orderDetails: '334-4863-23-989-445-4',
        item: [
            {
                name: 'Time way of building',
                price: '$32.00',
                author: 'Chris',
                delivery: 'Oct 8, 2020',
                trackingNumber: '9821391h9823hr238h890'
            },
        ],
        total: '$32.00'
    },
]

console.log('value of orderHistory', orderHistory)