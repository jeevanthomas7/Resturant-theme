import React from 'react';
import Table from '../components/sections/Table';
import Testimonial from '../components/sections/Testimonial';
import WtWeDo from '../components/sections/WtWeDo';

export default function BookTable() {
  return (
    <>
      <div id="table-page-wrapper" className="bg-[#FCFBF7]">
        <Table />
      </div>

      <div className="pt-14 md:pt-18 lg:pt-22">
        <Testimonial />
      </div>

      <WtWeDo />

      {/* Local style overrides matching Laravel */}
      <style dangerouslySetInnerHTML={{__html: `
        #table-page-wrapper section, 
        #table-page-wrapper #reservation {
          border-radius: 0 !important; 
          margin-top: 0 !important;
        }
      
        #table-page-wrapper .container {
          max-width: 100%;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }

        @media (min-width: 768px) {
          #table-page-wrapper .container {
            padding-left: 3rem;
            padding-right: 3rem;
          }
        }

        @media (min-width: 1024px) {
          #table-page-wrapper .container {
            padding-left: 5rem;
            padding-right: 5rem;
          }
        }
      `}} />
    </>
  );
}
