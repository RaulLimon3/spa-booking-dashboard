import { servicesColumns } from "../components/columns";
import { table } from "../components/tables";
// import { getUniqueServices } from "../service/appointments";
import { citas } from "../store/store";
import { services } from "../utils/services";

export const renderServicios = (appointments) => {
    // const services = getUniqueServices(appointments);
    const serviceList = Object.values(services)
    return `
        <div class="dashboard" id="services">
            <div class="dashboard__information">
                <div class="card">
                    <div class="card__content">
                        <div class="card__heading">
                            <img src="./src/assets/icons/settings-2.svg" alt="Icono de servicios">
                            <p class="card__text">Servicios</p>
                        </div>
                        ${table({
                            columns: servicesColumns,
                            data: serviceList
                        })}
                    </div>
                </div>
            </div>
        </div>
    `;
};