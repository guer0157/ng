export class UserService {
  activeUsers = ["Yoyis", "manu"];
  inactiveUsers = ["Sisi", "Cesar"];
  constructor() {}
  setToInactive(index: number, user: string) {
    this.activeUsers.splice(index, 1);
    this.inactiveUsers.push(user);
  }
  setToActive(index: number, user: string) {
    this.inactiveUsers.splice(index, 1);
    this.activeUsers.push(user);
  }
}
