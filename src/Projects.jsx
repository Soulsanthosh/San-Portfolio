import React from 'react'
import './Project.scss'

export default function Projects() {
  return (
    <body>
        <div className='overall-card' id='/Projects'>
            <div className="card-1">
                <h1 className='title-1'>CAR PARKING SYSTEM USING OPEN CV</h1>
                <img src="./Images/Carparking system.jpeg" alt=""/>
                <p>Creating a Car Parking System using OpenCV involves a combination of computer vision techniques to detect cars,
                    track their positions, and manage the parking slots. The system can be enhanced with additional features like 
                    automatic entry/exit tracking, detecting available parking spaces, or even implementing license plate recognition.
                </p>
                <span class="see-more"><a href="https://github.com/Soulsanthosh/AI_Car_Parking_system.git" rel="noreferrer" target="_blank">see more &rarr;</a></span>
            </div>

            <div className="card-2">
                <h1 className='title-2'>ATTENDANCE FOR FACIAL RECOGNITION USING AI</h1>
                <img src="./Images/Face Recognition.png" alt=""/>
                <p>The implementation of a Facial Recognition System can aid in identifying or verifying a person's identity from a 
                    digital image. However, manual attendance tracking can result in errors. 
                    The Face Recognition system could help automate attendance records with high accuracy and reduce 
                    the burden of manual attendance.
                </p>
                <span class="see-more"><a href="https://github.com/Soulsanthosh/Attendance_for_Facial_Recognition_using_AI.git" rel="noreferrer" target="_blank">see more &rarr;</a></span>
            </div>

            <div className="card-3">
                <h1 className='title-3'>MOVIE TICKET BOOKING SYSTEM(Front-End)
                </h1>
                <img src="./Images/Ticket Booking.jpeg" alt=""/>
                <p>The cinema booking process allows customers to conveniently purchase movie tickets online for their preferred showtimes. 
                    When booking tickets on a cinema's website or mobile app, customers can: Browse movie showtimes and pick seats Select 
                    ticket type and quantity Enter payment details Receive booking confirmation.
                </p>
                <span class="see-more"><a href="https://github.com/Soulsanthosh/Book_My_Show_Clone.git" rel="noreferrer" target="_blank">see more &rarr;</a></span>
            </div>
        </div>
    </body>
  )
}
