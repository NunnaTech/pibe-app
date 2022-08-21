import React, { useRef } from "react";
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";
import {MainTemplate} from "../../components/candidates_components/templates_components/MainTemplate";
import { Button } from 'primereact/button';
class ComponentToPrint extends React.Component {
  render() {
    return (
      <div className="flex align-items-center justify-content-center">
         <MainTemplate/>
      </div>
        
    );
  }
}

const Imprimir = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <div className="flex align-items-center justify-content-center">
      <Button
                label='Imprimir'
                icon={<span className='material-icons mr-2 text-3xl'>download</span>}
                className='bg-red-700 hover:bg-red-800 shadow-5 p-2 text-2xl'
                onClick={handlePrint}
            />
            </div>
    </div>
  );
};

export default Imprimir;

