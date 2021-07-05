import * as React from 'react';
import { RoutePlans } from '../../common/const';

const RoutePlan = () => (
  <>
    <h3>路线规划</h3>
    <figure>
      <table>
        <thead>
          <tr>
            <th>
              <span>日程</span>
            </th>
            <th>
              <span>距离</span>
            </th>
            <th>
              <span>目的地</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {RoutePlans.map((plan, index) => (
            <tr key={index}>
              <td>
                <span>Day{index + 1}</span>
              </td>
              <td>
                <span>{plan.distance}</span>
              </td>
              <td>
                <a href={plan.destinationLink}>
                  <span>{plan.destination}</span>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  </>
);

export default RoutePlan;
