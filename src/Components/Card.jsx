import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 35,
            hours: 17,
            minutes: 28,
            seconds: 50
        };
    }

    componentDidMount() {
        this.interval = setInterval(this.updateTimer, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateTimer = () => {
        let { days, hours, minutes, seconds } = this.state;

        if (seconds > 0) {
            seconds--;
        } else {
            seconds = 59;
            if (minutes > 0) {
                minutes--;
            } else {
                minutes = 59;
                if (hours > 0) {
                    hours--;
                } else {
                    hours = 23;
                    if (days > 0) {
                        days--;
                    }
                }
            }
        }

        this.setState({ days, hours, minutes, seconds });
    };

    render() {
        const { days, hours, minutes, seconds } = this.state;
        return (
            <div className='container w-1/2 flex justify-center items-center min-h-screen text-white'>
                <div className="grid grid-cols-2 gap-5 w-[270px]">
                    <div className="flex flex-col gap-2 border rounded-full text-center w-32 justify-center h-32">
                        <span className="text-4xl font-bold">{days}</span>
                        <span className="">Days</span>
                    </div>
                    <div className="flex flex-col gap-2 border rounded-full text-center w-32 justify-center h-32">
                        <span className="text-4xl font-bold">{hours}</span>
                        <span className="">Hours</span>
                    </div>
                    <div className="flex flex-col gap-2 border rounded-full text-center w-32 justify-center h-32">
                        <span className="text-4xl font-bold">{minutes}</span>
                        <span className="">Minutes</span>
                    </div>
                    <div className="flex flex-col gap-2 border rounded-full text-center w-32 justify-center h-32">
                        <span className="text-4xl font-bold">{seconds}</span>
                        <span className="">Seconds</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
