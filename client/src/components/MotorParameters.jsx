import { FiZap, FiCpu, FiList, FiRefreshCw, FiShuffle, FiThermometer, FiShield, FiCircle, FiMaximize2, FiTarget, FiBox, FiArrowUpRight, FiLayers } from 'react-icons/fi';
import { TbGauge } from 'react-icons/tb';
import './MotorParameters.css';

export default function MotorParameters() {
    const performanceParams = [
        { icon: <FiZap />, title: "Rated Voltage & Frequency", desc: "230V / 50Hz", color: "#3498db" },
        { icon: <FiCpu />, title: "Output Power", desc: "As Per Customer Specification", color: "#2ecc71" },
        { icon: <TbGauge />, title: "Required RPM", desc: "900 / 1400 / 2400", color: "#f1c40f" },
        { icon: <FiList />, title: "No. Of Speeds", desc: "Single / Two / Three", color: "#e74c3c" },
        { icon: <FiRefreshCw />, title: "Rotation", desc: "Clockwise (A) / Anticlockwise (B)", color: "#3498db" },
        { icon: <FiShuffle />, title: "Speed Difference", desc: "As Per Customer Specification", color: "#7f8c8d" },
        { icon: <FiThermometer />, title: "Temperature Rise", desc: "160-250V, 75°C (Max.)", color: "#e67e22" },
        { icon: <FiShield />, title: "Thermal Overload", desc: "Protector Cuts Off Supply In Case Of Overheating", color: "#95a5a6" }
    ];

    const mechanicalParams = [
        { icon: <FiCircle />, title: "Motor Dia (Frame)", desc: "89 Dia / 110 Dia / T-200 / H-Frame / E- Frame", color: "#27ae60" },
        { icon: <FiMaximize2 />, title: "Motor Length", desc: "As Per Customers Specification", color: "#2980b9" },
        { icon: <FiLayers />, title: "Bearing Type", desc: "Bush / Ball Bearing", color: "#f39c12" },
        { icon: <FiTarget />, title: "Shaft Dia", desc: "8mm / 12.7mm / 14.5mm", color: "#e74c3c" },
        { icon: <FiArrowUpRight />, title: "Shaft Extension", desc: "As Per Customers Specifications", color: "#3498db" },
        { icon: <FiBox />, title: "Mounting Type", desc: "Case Bolt / Stator Mounting / Mounting Ring (Sheet Metal Or Cast Iron)", color: "#7f8c8d" }
    ];

    return (
        <section className="section motor-parameters-section">
            <div className="container">
                {/* Performance Section */}
                <div className="mp-header">
                    <div className="badge badge-green" style={{ display: 'inline-block', marginBottom: '12px' }}>How To Choose Motor</div>
                    <h2 className="section-title">Performance</h2>
                    <p className="section-desc" style={{ marginTop: '8px' }}>Key Indicators Defining Efficiency, Reliability, And Output</p>
                </div>
                
                <div className="mp-grid">
                    {performanceParams.map((param, i) => (
                        <div className="mp-card" key={i}>
                            <div className="mp-icon" style={{ color: param.color }}>{param.icon}</div>
                            <h4 className="mp-card-title">{param.title}</h4>
                            <p className="mp-card-desc">{param.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mp-divider"></div>

                {/* Mechanical Section */}
                <div className="mp-mech-container">
                    <div className="mp-mech-grid">
                        {mechanicalParams.map((param, i) => (
                            <div className="mp-card" key={i}>
                                <div className="mp-icon" style={{ color: param.color }}>{param.icon}</div>
                                <h4 className="mp-card-title">{param.title}</h4>
                                <p className="mp-card-desc">{param.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mp-mech-content">
                        <div className="badge badge-green" style={{ display: 'inline-block', marginBottom: '12px' }}>How To Choose Motor</div>
                        <h2 className="section-title">Mechanical <span>Parameters</span></h2>
                        <h3 className="mp-mech-subtitle">Mechanical Parameters Defining Efficiency And Durability</h3>
                        <p className="mp-mech-desc">Mechanical Parameters Are Fundamental Factors That Govern The Performance, Reliability, And Efficiency Of Any Mechanical System. These Include Torque, Rotational Speed (RPM), Load, Inertia, Stress, And Vibration. Each Parameter Interacts With Others, Influencing How A Machine Responds Under Operating Conditions. For Instance, Torque And Load Determine Power Transmission, While RPM And Inertia Affect Stability And Efficiency. Stress And Vibration Control Structural Integrity And Service Life. By Carefully Analyzing These Parameters, Engineers Can Optimize Design, Minimize Energy Losses, And Prevent Premature Failure. Understanding Mechanical Parameters Is Essential For Achieving Safe, Efficient, And Durable Operation Across Diverse Engineering Applications.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
