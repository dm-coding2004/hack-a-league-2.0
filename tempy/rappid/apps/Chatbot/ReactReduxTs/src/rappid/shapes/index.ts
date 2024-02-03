/*! JointJS+ v3.7.3 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2023 client IO

 2024-02-02 


This Source Code Form is subject to the terms of the JointJS+ Trial License
, v. 2.0. If a copy of the JointJS+ License was not distributed with this
file, You can obtain one at https://www.jointjs.com/license
 or from the JointJS+ archive as was distributed by client IO. See the LICENSE file.*/


/* eslint-disable */
import { dia } from '@clientio/rappid';

import './app.shapes';
import './stencil.shapes';

// extend joint.shapes namespace
declare module '@clientio/rappid' {
    namespace shapes {
        namespace app {
            class Base extends dia.Element {
                getBoundaryPadding(): dia.PaddingJSON;
                static fromStencilShape(element: dia.Element): Base;
            }
            class Message extends Base {
                addDefaultPort(): void;
                canAddPort(group: string): boolean;
                toggleAddPortButton(group: string): void;
            }
            class FlowchartStart extends Base {
            }
            class FlowchartEnd extends Base {
            }
            class Link extends dia.Link {
            }
        }
        namespace stencil {
            class Message extends dia.Element {
            }
            class FlowchartStart extends dia.Element {
            }
            class FlowchartEnd extends dia.Element {
            }
        }
    }
}
