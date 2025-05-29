"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeSlot = void 0;
const typeorm_1 = require("typeorm");
const therapist_entity_1 = require("../../therapists/entities/therapist.entity");
const booking_entity_1 = require("../../bookings/entities/booking.entity");
let TimeSlot = class TimeSlot {
};
exports.TimeSlot = TimeSlot;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TimeSlot.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], TimeSlot.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], TimeSlot.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => therapist_entity_1.Therapist, (therapist) => therapist.timeSlots, {
        eager: true,
    }),
    __metadata("design:type", therapist_entity_1.Therapist)
], TimeSlot.prototype, "therapist", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => booking_entity_1.Booking, (booking) => booking.timeSlot),
    __metadata("design:type", Array)
], TimeSlot.prototype, "bookings", void 0);
exports.TimeSlot = TimeSlot = __decorate([
    (0, typeorm_1.Entity)()
], TimeSlot);
//# sourceMappingURL=timeslot.entity.js.map