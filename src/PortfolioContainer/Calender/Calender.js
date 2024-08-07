
import React from 'react'
// import { Box, Flex, Grid, Image, Heading } from "@chakra-ui/react";
// import "./github.css"

import GitHubCalendar from "react-github-calendar";
import './Calender.css'

const Calander = () => {

    const selectLastHalfYear = (contributions) => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 5;

        return contributions.filter((day) => {
            const date = new Date(day.date);
            const monthOfDay = date.getMonth();

            return (
                date.getFullYear() === currentYear ||
                monthOfDay > currentMonth - shownMonths ||
                monthOfDay <= currentMonth
            );
        });
    };



    return (
        <section className='calander' id='github'>
          <div>
          <h1 className='whyy'>GitHub</h1>
          </div>
            
            <div className='container container_github'>
                <div className='cal'>
                    <GitHubCalendar
                    className="innercal"
                        username="1803amar"
                        transformData={selectLastHalfYear}
                        color="3ecc04"
                        width="100vw"
                    />
                </div>
                {/* <div className='contribution'>
                    <img src="https://streak-stats.demolab.com/?username=1803amar&theme=gruvbox&border_radius=15&date_format=M%20j%5B%2C%20Y%5D&color=4db5ff" alt="contribution" />
                </div> */}
                <div className='language'>
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=1803amar&layout=compact&theme=gruvbox&border_radius=15&color=fb982f&border=rgb(255,180,0)" alt="language" />
                </div>
                <div className='stats'>
                    <img src="https://github-readme-stats.vercel.app/api?username=1803amar&count_private=true&theme=gruvbox&border_radius=15&color=fb982f" alt="stats" />
                </div>
            </div>
{/*   */}



        </section>

    )
}

export default Calander