import { Component } from '../../utils/component';
import { WinnersContainer } from '../../components/winners-container/winners-container';
import { getAllWinners } from '../../api/api';

export class Winners extends Component {
  winnersContainer = new WinnersContainer(this.element);
  page = 1;
  sort = 'id';
  order = 'ASC';

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['winners']);
    this.getAllWinners();

    this.winnersContainer.updatePage = (pageNumber) => {
      this.page = pageNumber;
      this.getAllWinners(this.page, this.sort, this.order);
    };
    this.winnersContainer.sortWinners = (type, order) => {
      this.sort = type;
      this.order = order;
      this.getAllWinners(this.page, this.sort, this.order);
    };
  }

  async getAllWinners(page = 0, sort = 'id', order = 'ASC'): Promise<void> {
    const winners = await getAllWinners(page, sort, order);
    const totalCount = +winners.totalCount;

    this.winnersContainer.pagination.updateNextButton(
      this.page,
      totalCount,
      10,
    );
    this.winnersContainer.addWinners(winners);
  }
}
