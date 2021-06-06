---
author:
  name: "Emma Kang"
date: 2021-05-31
linktitle: Spring Booking Web Service
title: "[Personal] Spring Booking Web Service"
type:
- post
- posts
weight: 10
series:
- personal project
aliases:
- /projects/spring-booking-webservice
draft:
- true
---

This is personal project for study room booking webservice. The purpose of this project is to reinforce the knowledge of Spring framework, security, and Junit testing. 

I am currently working on this project with learning testing online lecture. 

```java
@Service
public class BookingServiceImpl implements BookingService {
    final static Logger logger = LoggerFactory.getLogger(BookingServiceImpl.class);
    private final BookingDAO bookingDAO;

    public BookingServiceImpl(BookingDAO bookingDAO) {
        this.bookingDAO = bookingDAO;
    }

    @Override
    public BookingDTO getBookingInfoByUserId(int userid) {
        return bookingDAO.getBookingInfoByUserId(userid);
    }

    @Override
    public List<BookingDTO> getBookingInfoByRoom(int roomid) {
        return bookingDAO.getBookingInfoByRoom(roomid);
    }

    @Override
    public Map<String, String> addNewBooking(BookingDTO bookingDTO) {
        Map<String, String> response = new HashMap<>();
        logger.info("Creating new booking schedule for userID:" + bookingDTO.getUserId());

        try {
            int resultCode = bookingDAO.addNewBooking(bookingDTO);

            if (resultCode == 1) {
                response.put("status", "201");
            } else {
                response.put("status", "500");
            }
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("Error occurred while creating new booking" + bookingDTO.toString());
        }

        return response;
    }

    @Override
    public Map<String, String> updateBooking(int bookingId, Map<String, String> info) {
        Map<String, String> response = new HashMap<>();
        SimpleDateFormat sdFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        logger.info("Updating booking schedule for bookId:" + bookingId);

        try {
            if (info.isEmpty())
                return null;

            BookingDTO booking = bookingDAO.getBookingInfoByBookingId(bookingId);
            // convert string to date
            Date startDateTime = sdFormat.parse(info.get("startTime"));
            Date endDateTime = sdFormat.parse(info.get("endTime"));
            // set updated date times
            booking.setStartTime(startDateTime);
            booking.setEndTime(endDateTime);

            int resultCode = bookingDAO.updateBooking(booking);

            if (resultCode == 1) {
                response.put("status", "200");
            } else {
                response.put("status", "500");
                response.put("message", "Error occurred while processing query");
            }

        } catch (ParseException e) {
            e.printStackTrace();
            logger.error("Error occurring while canceling booking" + e);
        }

        return response;
    }

    @Override
    public Map<String, String> cancelBooking(int bookingId) {
        Map<String, String> response = new HashMap<>();
        logger.info("Canceling booking schedule for bookId:" + bookingId);

        try {
            int resultCode = bookingDAO.cancelBooking(bookingId);

            if (resultCode == 1) {
                response.put("status", "200");
            } else {
                response.put("status", "500");
                response.put("message", "Error occurred while processing query");
            }
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("Error occurring while canceling booking" + e);
        }

        return response;
    }
}
```







