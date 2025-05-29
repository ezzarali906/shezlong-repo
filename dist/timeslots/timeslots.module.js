"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeslotsModule = void 0;
const common_1 = require("@nestjs/common");
const timeslots_service_1 = require("./timeslots.service");
const timeslots_controller_1 = require("./timeslots.controller");
const typeorm_1 = require("@nestjs/typeorm");
const timeslot_entity_1 = require("./entities/timeslot.entity");
let TimeslotsModule = class TimeslotsModule {
};
exports.TimeslotsModule = TimeslotsModule;
exports.TimeslotsModule = TimeslotsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([timeslot_entity_1.TimeSlot])],
        controllers: [timeslots_controller_1.TimeslotsController],
        providers: [timeslots_service_1.TimeslotsService],
        exports: [timeslots_service_1.TimeslotsService],
    })
], TimeslotsModule);
//# sourceMappingURL=timeslots.module.js.map