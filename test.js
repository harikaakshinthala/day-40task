let rooms = [
    {
        "room_id": 1,
        "room_name": "Room 1",
        "amenities": [
            "AC",
            "CCTV",
            "STAGE"
        ],
        "noSeats": 100,
        "room_fee_perhour": 1500,
        "bookings": [
            {
                "room_id": 1,
                "customer_name": "Dhivya",
                "date": "13 Jan 2024",
                "startTime": "10:00am",
                "endTime": "15:00pm"
            },
            {
                "room_id": 1,
                "customer_name": "Tripathi",
                "date": "14 Jan 2024",
                "startTime": "10:00am",
                "endTime": "15:00pm"
            }
        ]
    },
    {
        "room_id": 2,
        "room_name": "Room 2",
        "amenities": [
            "AC",
            "CCTV",
            "STAGE"
        ],
        "noSeats": 100,
        "room_fee_perhour": 1500,
        "bookings": [
            {
                "room_id": 2,
                "customer_name": "Tripathi",
                "date": "14 Jan 2024",
                "startTime": "10:00am",
                "endTime": "15:00pm"
            }
        ]
    }
]

const getRoom = rooms.find( x => x.room_id === 1);
  // Check if booking already exists for chosen room in the selected timeframe

// console.log(getRoom.bookings.map((obj)=>obj.date));

// Check hall availability

// date, startTime, endTime against an array of obj
function checkAvailability(roomid, date, strt, end){
    // Get Room Bookings
    const getRoomBooking = rooms.find( x => x.room_id === 1).bookings;
    console.log("getRoomBooking", getRoomBooking);
    let fdBookings = getRoomBooking.filter((obj)=>{
        return obj.date == date;
    })

    if(fdBookings.length > 0){
        return false;
    }else{
        return true;
    }

    console.log(fdBookings);

}

 checkAvailability(2, "14 Jan 2024","10:00am", "15:00pm");

// let halls = [
//   {
//     room_id: 1,
//     room_name: "Room 1",
//     amenities: ["AC", "CCTV", "STAGE"],
//     noSeats: 100,
//     room_fee_perhour: 1500,
//   },
//   {
//     room_id: 2,
//     room_name: "Room 2",
//     amenities: ["AC", "CCTV", "STAGE"],
//     noSeats: 100,
//     room_fee_perhour: 1500,
//   },
//   {
//     room_id: 3,
//     room_name: "Room 3",
//     amenities: ["AC", "CCTV", "STAGE"],
//     noSeats: 100,
//     room_fee_perhour: 1500,
//   },
// ];
// let bookings = [
//   {
//     room_id: 2,
//     customer_name: "Tripathi",
//     date: "14 Jan 2024",
//     startTime: "10:00am",
//     endTime: "15:00pm",
//   },
//   {
//     room_id: 2,
//     customer_name: "Tripathi",
//     date: "15 Jan 2024",
//     startTime: "10:00am",
//     endTime: "15:00pm",
//   },
//   {
//     room_id: 1,
//     customer_name: "Tripathi",
//     date: "15 Jan 2024",
//     startTime: "10:00am",
//     endTime: "15:00pm",
//   },
//   {
//     room_id: 3,
//     customer_name: "Tripathi",
//     date: "15 Jan 2024",
//     startTime: "10:00am",
//     endTime: "15:00pm",
//   },
// ];

// function checkRoomBookingStatus(room_id) {}

// let hallBookingDetails = bookings.map((obj) => {
//   // let getRoomIds = Object.val(halls);

//   let getBookingDetail = bookings.filter((booking) => {
//     return booking.room_id == obj.room_id && booking.date == obj.date;
//   });

//   // console.log("getBookingDetail", getBookingDetail);

//   let getRoomDetail = halls.find((hall) => {
//     return hall.room_id == obj.room_id;
//   });

//   let bookingStatus = getBookingDetail > 0 ? "vacant" : "booked";

//   obj.room_name = getRoomDetail.room_name;
//   obj.booking_status = bookingStatus;

//   return obj;
// });
