import React from "react";
import "../css/process.css"

export const Process = ({ step }) => {
    // Hàm xử lý trạng thái của từng bước
    const getStepClass = (currentStep, targetStep) => {
        if (currentStep > targetStep) {
            return "stepper-item completed";
        } else if (currentStep === targetStep) {
            return "stepper-item active";
        } else {
            return "stepper-item";
        }
    };
    
    return (<div>
        <div class="stepper-wrapper">
  <div class={getStepClass(step, 1)}>
    <div class="step-counter">1</div>
    <div class="step-name">Chọn Tour</div>
  </div>
  <div class={getStepClass(step, 2)}>
    <div class="step-counter">2</div>
    <div class="step-name">Chọn số vé</div>
  </div>
  <div class={getStepClass(step, 3)}>
    <div class="step-counter">3</div>
    <div class="step-name">Điền thông tin</div>
  </div>
  <div class={getStepClass(step, 4)}>
    <div class="step-counter">4</div>
    <div class="step-name">Thanh toán</div>
  </div>
  <div class={getStepClass(step, 5)}>
    <div class="step-counter">5</div>
    <div class="step-name">Xác nhận</div>
  </div>
</div>

    </div>);
};

