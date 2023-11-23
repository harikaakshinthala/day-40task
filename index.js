import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
console.log(process.env.PORT);

const app = express();

app.use(cors());
app.use(express.json());

// Port for localhost
//const PORT = process.env.PORT;
const PORT=4000

let halls = [
  {
    room_id: 1,
    room_name: "Room 1",
    amenities: ["AC", "CCTV", "STAGE"],
    noSeats: 100,
    room_fee_perhour: 1500,
  },
  {
    room_id: 2,
    room_name: "Room 2",
    amenities: ["AC", "CCTV", "STAGE"],
    noSeats: 100,
    room_fee_perhour: 1500,
  },
  {
    room_id: 3,
    room_name: "Room 3",
    amenities: ["AC", "CCTV", "STAGE"],
    noSeats: 100,
    room_fee_perhour: 1500,
  },
];
let bookings = [
  {
    room_id: 2,
    customer_name: "Tripathi",
    date: "14 Jan 2024",
    startTime: "10:00am",
    endTime: "15:00pm",
  },
  {
    room_id: 2,
    customer_name: "Tripathi",
    date: "15 Jan 2024",
    startTime: "10:00am",
    endTime: "15:00pm",
  },
  {
    room_id: 1,
    customer_name: "Tripathi",
    date: "15 Jan 2024",
    startTime: "10:00am",
    endTime: "15:00pm",
  },
  {
    room_id: 3,
    customer_name: "Tripathi",
    date: "15 Jan 2024",
    startTime: "10:00am",
    endTime: "15:00pm",
  },
];

app.get("/", function (request, response) {
  // response.send('Hall Booking API')
  let html = "";
  html += "<h1>Hall Booking API</h1>";
  html += '<a href="/halls">Show all rooms</a> | ';
  html += '<a href="/bookings">Show all bookings</a> | ';
  html += '<a href="/customers">Show Customers</a> | ';
  response.set("Content-Type", "text/html");
  response.send(html);
});

// Show created Halls //
// =========================== //
app.get("/halls", function (request, response) {
  response.send(halls);
});

// Add Hall //
// =========================== //
app.post("/halls", function (request, response) {
  const addRoom = request.body;
  // addRoom.bookings = [];
  halls.push(addRoom);
  response.send(addRoom);
});

// Show all Bookings //
// =========================== //
app.get("/bookings", function (request, response) {
  let hallBookingDetails = bookings.map((obj) => {
    // let getRoomIds = Object.val(halls);

    let getBookingDetail = bookings.filter((booking) => {
      return booking.room_id == obj.room_id && booking.date == obj.date;
    });

    // console.log("getBookingDetail", getBookingDetail);

    let getRoomDetail = halls.find((hall) => {
      return hall.room_id == obj.room_id;
    });

    let bookingStatus = getBookingDetail > 0 ? "vacant" : "booked";

    obj.room_name = getRoomDetail.room_name;
    obj.booking_status = bookingStatus;

    return obj;
  });
  response.send(hallBookingDetails);
  // response.send(bookings);
});

// Add Check Room Availability on Date //
// =========================== //
function checkAvailability(roomid, date, strt, end) {
  // Get Room Bookings
  // const getRoomBooking = halls.find( x => x.room_id === 1);
  // console.log("getRoomBooking", getRoomBooking);
  let fdBookings = bookings.filter((obj) => {
    return obj.room_id == roomid && obj.date == date;
  });

  console.log(fdBookings);

  if (fdBookings.length > 0) {
    return false;
  } else {
    return true;
  }

  // console.log(fdBookings);
}

// Add Booking //
// =========================== //
app.post("/bookings", function (request, response) {
  const addRoom = request.body;

  console.log(addRoom.room_id);
  console.log(addRoom.date);
  console.log(addRoom.startTime);
  console.log(addRoom.endTime);

  //checkAvailability(addRoom.room_id,addRoom.date,addRoom.startTime,addRoom.startTime)
  console.log(
    checkAvailability(
      addRoom.room_id,
      addRoom.date,
      addRoom.startTime,
      addRoom.startTime
    )
  );

  // const getRoom = halls.find( x => x.room_id === addRoom.room_id);

  if (
    checkAvailability(
      addRoom.room_id,
      addRoom.date,
      addRoom.startTime,
      addRoom.startTime
    ) === false
  ) {
    response.status(404).send("Room Not Available on this date");
  } else {
    bookings.push(addRoom);
    response.status(200).send("Room is Available on this date");
  }
  // Check if booking already exists for chosen room in the selected timeframe
  // response.send(addRoom)
});

// Show all Customers //
// =========================== //
app.get("/customers", function (request, response) {
  let hallBookingDetails = bookings.map((obj) => {
    // let getRoomIds = Object.val(halls);

    let getBookingDetail = bookings.filter((booking) => {
      return booking.room_id == obj.room_id && booking.date == obj.date;
    });

    // console.log("getBookingDetail", getBookingDetail);

    let getRoomDetail = halls.find((hall) => {
      return hall.room_id == obj.room_id;
    });

    let bookingStatus = getBookingDetail > 0 ? "vacant" : "booked";

    obj.room_name = getRoomDetail.room_name;

    return obj;
  });
  response.send(hallBookingDetails);
  // response.send(bookings);
});

app.listen(PORT, () => console.log("Server is started in " + PORT));
