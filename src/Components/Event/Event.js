import React from 'react';
import {
    EventContainer,
    OrderServie,
    Table,
    Tr,
    Th,
    Td,
    H1,
    Meetings,
    EventsSchedule,
    Schedule,
    Date,
    EventTitle,
} from './Event.elements';

function Event() {
    return (
        <>
            <EventContainer>
                <OrderServie>
                    <H1>Order of Service</H1>
                    <Table>
                        <Tr>
                            <Th>English Service</Th>
                            <Td>9:00am - 10:00am</Td>
                        </Tr>
                        <Tr>
                            <Th>Kiswahili Service</Th>
                            <Td>9:00am - 10:00am</Td>
                        </Tr>
                        <Tr>
                            <Th>Youth Service</Th>
                            <Td>9:00am - 10:00am</Td>
                        </Tr>
                        <Tr>
                            <Th>Church School</Th>
                            <Td>9:00am - 10:00am</Td>
                        </Tr>
                    </Table>
                </OrderServie>
                <Meetings>
                    <H1>Church Meetings</H1>
                    <Table>
                        <thead>
                            <Th>
                                Group                         
                                <hr/>
                            </Th>
                            <Th>Day                        
                                <hr/>
                            </Th>
                            <Th>Time                        
                                <hr/>
                            </Th>
                        </thead>
                        <Tr>
                            <Th>Choir</Th>
                            <Td>Wednesday</Td>
                            <Td>4pm</Td>
                        </Tr>

                        <Tr>
                            <Th>Evangelism Meeting</Th>
                            <Td>Tuesday</Td>
                            <Td>5pm</Td>
                        </Tr>
                    </Table>
                </Meetings>
                <EventsSchedule>
                    <H1>Upcoming Events</H1>
                    <Schedule>
                        <Date>
                            5 Jan
                        </Date>
                        <EventTitle>
                            Lorem ipsum dolor sit amet consectetur.
                        </EventTitle>
                    </Schedule>
                    <Schedule>
                        <Date>
                            5 Jan
                        </Date>
                        <EventTitle>
                            Lorem ipsum dolor sit amet consectetur.
                        </EventTitle>
                    </Schedule>
                </EventsSchedule>
            </EventContainer>
        </>
    )
}

export default Event
