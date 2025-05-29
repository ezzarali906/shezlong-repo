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
exports.Therapist = void 0;
const typeorm_1 = require("typeorm");
const timeslot_entity_1 = require("../../timeslots/entities/timeslot.entity");
let Therapist = class Therapist {
};
exports.Therapist = Therapist;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Therapist.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Therapist.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Therapist.prototype, "specialization", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => timeslot_entity_1.TimeSlot, (slot) => slot.therapist),
    __metadata("design:type", Array)
], Therapist.prototype, "timeSlots", void 0);
exports.Therapist = Therapist = __decorate([
    (0, typeorm_1.Entity)()
], Therapist);
//# sourceMappingURL=therapist.entity.js.map