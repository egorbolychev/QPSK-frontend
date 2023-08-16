import React, { useState } from "react";
import "./Footer.pcss"
import { ProgressBar, Button } from "/src/components/ui";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { setStep } from "/src/store/stepSlice"

const MainCalc = () => {
    // const [percent, setPrecent] = useState(100)
    const [finished, setFinished] = useState(false)
    const dispatch = useDispatch()

    return (
        <div className="footer-container">
            <div className="footer-container__info">
                <p onClick={() => setFinished(!finished)}>{!finished ? "Оптимизируем скорость ключа" : "Готово!"}</p>
                {!finished && <p>Выполнено: <span>{finished ? 100 : 25}%</span></p>}
            </div>
            <ProgressBar completed={finished ? 100 : 25}/>
            <div className={classNames(
                "footer-container__buttons",
                {"footer-container__buttons__finished": finished}
             )}>
                {!finished ?
                <Button text="Отмена" theme="white" onClick={() => dispatch(setStep({step: 3}))}/>
                :
                <Button text="Завершить" iconAfter="arr-right" theme="yellow" onClick={() => dispatch(setStep({step: 5}))}/>
                }
            </div>
        </div>
    );
};

export default MainCalc